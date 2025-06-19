"use client";

import { FC, useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SubmissionState {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
}

interface NotificationState {
  show: boolean;
  message: string;
  type: "success" | "info";
}

const ContactSection: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    status: "idle",
  });

  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    message: "",
    type: "success",
  });

  // Phone number for WhatsApp (remove spaces and format properly)
  const phoneNumber = "923491303137";
  const formattedPhone = `+${phoneNumber}`;

  // Detect user's platform for better UX
  const getUserAgent = () => {
    if (typeof window === "undefined") return "";
    return window.navigator.userAgent;
  };

  const isMobile = () => {
    const userAgent = getUserAgent();
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
  };

  const isIOS = () => {
    const userAgent = getUserAgent();
    return /iPad|iPhone|iPod/.test(userAgent);
  };

  const isMac = () => {
    const userAgent = getUserAgent();
    return /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent);
  };

  // Show notification function
  const showNotification = (
    message: string,
    type: "success" | "info" = "success"
  ) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: "", type: "success" });
    }, 3000);
  };

  // WhatsApp functionality
  const openWhatsApp = (message?: string) => {
    const defaultMessage =
      message || "Hi! I'm interested in discussing a project with you.";
    const encodedMessage = encodeURIComponent(defaultMessage);

    // WhatsApp URLs
    const whatsappWeb = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    const whatsappApp = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    if (isMobile()) {
      // On mobile, try to open WhatsApp app first
      window.open(whatsappApp, "_blank");
    } else {
      // On desktop, open WhatsApp Web
      window.open(whatsappWeb, "_blank");
    }

    showNotification("Opening WhatsApp...", "info");
  };

  const handleWhatsAppWithForm = () => {
    if (formData.name && formData.message) {
      const customMessage = `Hi! I'm ${formData.name}. ${formData.message}`;
      openWhatsApp(customMessage);

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setSubmissionState({
        status: "success",
        message: "Opening WhatsApp with your message...",
      });
    } else {
      openWhatsApp();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionState({ status: "submitting" });

    try {
      // Validate form data
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()
      ) {
        throw new Error("Please fill in all required fields");
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      // Create mailto link with proper encoding
      const subject = encodeURIComponent(
        `Project Inquiry from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Message:\n${formData.message}\n\n` +
          `---\n` +
          `Sent from portfolio contact form`
      );

      const mailtoLink = `mailto:shahhussaint6@gmail.com?subject=${subject}&body=${body}`;

      // Always try to open email client first
      window.location.href = mailtoLink;

      setSubmissionState({
        status: "success",
        message: "Opening your email client...",
      });

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
      }, 2000);
    } catch (error) {
      setSubmissionState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setSubmissionState({ status: "idle" });
    }, 5000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error state when user starts typing
    if (submissionState.status === "error") {
      setSubmissionState({ status: "idle" });
    }
  };

  const handleDirectEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Project Inquiry from Portfolio");
    const mailtoLink = `mailto:shahhussaint6@gmail.com?subject=${subject}`;
    window.location.href = mailtoLink;
    showNotification("Opening your email client...", "info");
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showNotification(`${type} copied to clipboard!`);
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showNotification(`${type} copied to clipboard!`);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notification */}
        {notification.show && (
          <div
            className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
              notification.type === "success"
                ? "bg-green-500 text-white"
                : "bg-blue-500 text-white"
            } animate-pulse`}
          >
            <div className="flex items-center gap-2">
              <span>{notification.type === "success" ? "✓" : "ℹ"}</span>
              <span>{notification.message}</span>
            </div>
          </div>
        )}

        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
          Let's Talk About Your Next App
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
                disabled={submissionState.status === "submitting"}
                maxLength={100}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
                disabled={submissionState.status === "submitting"}
                maxLength={255}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                required
                disabled={submissionState.status === "submitting"}
                maxLength={2000}
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {formData.message.length}/2000
              </div>
            </div>

            {/* Status Messages */}
            {submissionState.message && (
              <div
                className={`p-4 rounded-lg text-sm ${
                  submissionState.status === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : submissionState.status === "error"
                    ? "bg-red-50 text-red-800 border border-red-200"
                    : "bg-blue-50 text-blue-800 border border-blue-200"
                }`}
              >
                {submissionState.message}
              </div>
            )}

            {/* Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="submit"
                disabled={submissionState.status === "submitting"}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  submissionState.status === "submitting"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                } text-white`}
              >
                {submissionState.status === "submitting"
                  ? "Opening Email..."
                  : "Send via Email"}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppWithForm}
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 bg-green-600 hover:bg-green-700 active:bg-green-800 text-white flex items-center justify-center gap-2"
              >
                <span>💬</span>
                Send via WhatsApp
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Email opens your default email client. WhatsApp opens in app/web.
            </p>
          </form>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Or Contact Directly
            </h3>

            <div className="space-y-4">
              {/* WhatsApp Contact */}
              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">💬</span>
                </div>
                <div className="flex-grow">
                  <div className="font-medium text-gray-900">WhatsApp</div>
                  <button
                    onClick={() => openWhatsApp()}
                    className="text-green-600 hover:text-green-800 transition-colors"
                  >
                    {formattedPhone}
                  </button>
                </div>
                <button
                  onClick={() => openWhatsApp()}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  Open WhatsApp
                </button>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">📧</span>
                </div>
                <div className="flex-grow">
                  <div className="font-medium text-gray-900">Email</div>
                  <a
                    href="mailto:shahhussaint6@gmail.com?subject=Project Inquiry from Portfolio"
                    onClick={handleDirectEmail}
                    className="text-blue-600 hover:text-blue-800 transition-colors break-all"
                  >
                    shahhussaint6@gmail.com
                  </a>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard("shahhussaint6@gmail.com", "Email")
                  }
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                  title="Copy email"
                >
                  📋
                </button>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">📱</span>
                </div>
                <div className="flex-grow">
                  <div className="font-medium text-gray-900">Phone</div>
                  <a
                    href={`tel:${formattedPhone}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {formattedPhone}
                  </a>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard(formattedPhone, "Phone number")
                  }
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                  title="Copy phone"
                >
                  📋
                </button>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">📍</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Location</div>
                  <div className="text-gray-600">Karachi, Pakistan</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-700 text-xl">⚡</span>
                </div>
                <div className="flex-grow">
                  <div className="font-medium text-gray-900">GitHub</div>
                  <a
                    href="https://github.com/shahhussain-t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 transition-colors break-all"
                  >
                    github.com/shahhussain-t
                  </a>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard(
                      "https://github.com/shahhussain-t",
                      "GitHub URL"
                    )
                  }
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                  title="Copy GitHub"
                >
                  📋
                </button>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xl">💼</span>
                </div>
                <div className="flex-grow">
                  <div className="font-medium text-gray-900">LinkedIn</div>
                  <a
                    href="https://linkedin.com/in/shahhussain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors break-all"
                  >
                    linkedin.com/in/shahhussain
                  </a>
                </div>
                <button
                  onClick={() =>
                    copyToClipboard(
                      "https://linkedin.com/in/shahhussain",
                      "LinkedIn URL"
                    )
                  }
                  className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                  title="Copy LinkedIn"
                >
                  📋
                </button>
              </div>
            </div>

            {/* Platform-specific note */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>💬 WhatsApp:</strong>{" "}
                {isMobile()
                  ? "Opens WhatsApp app directly on mobile"
                  : "Opens WhatsApp Web on desktop"}
                <br />
                <strong>📧 Email:</strong> Opens your default email client
                directly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
