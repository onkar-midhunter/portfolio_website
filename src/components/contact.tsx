"use client"
import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle, Zap } from 'lucide-react';

export default function RecruiterContactForm() {
  const [formData, setFormData] = useState({
    recName: '',
    recEmail: '',
    recMessage: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.recName || !formData.recEmail) {
      setStatus({ type: 'error', message: 'Name and Email are required' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/recruiterDetails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Thank you! Email sent successfully. Please check your inbox (and your spam folder, just in case).'});
        setFormData({ recName: '', recEmail: '', recMessage: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-8 h-8 text-blue-500" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </h1>
          </div>
          <p className="text-gray-400 text-lg mb-3">
            Interested in working together? Get in touch with me!
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <Mail className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">
              You'll receive an automatic email with my details
            </span>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl shadow-2xl border border-gray-800 p-8 backdrop-blur-sm">
          <div className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="recName" className="block text-sm font-semibold text-gray-300 mb-2">
                Your Name <span className="text-red-400">*</span>
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 w-5 h-5 transition-colors" />
                <input
                  type="text"
                  id="recName"
                  name="recName"
                  value={formData.recName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-950 border border-gray-800 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="recEmail" className="block text-sm font-semibold text-gray-300 mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 w-5 h-5 transition-colors" />
                <input
                  type="email"
                  id="recEmail"
                  name="recEmail"
                  value={formData.recEmail}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-950 border border-gray-800 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="recMessage" className="block text-sm font-semibold text-gray-300 mb-2">
                Message <span className="text-gray-500 text-xs font-normal">(Optional)</span>
              </label>
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 text-gray-500 group-focus-within:text-blue-400 w-5 h-5 transition-colors" />
                <textarea
                  id="recMessage"
                  name="recMessage"
                  value={formData.recMessage}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-950 border border-gray-800 rounded-xl text-gray-200 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>
            </div>

            {/* Status Message */}
            {status.message && (
              <div className={`flex items-center gap-3 p-4 rounded-xl border ${
                status.type === 'success' 
                  ? 'bg-green-500/10 border-green-500/50 text-green-400' 
                  : 'bg-red-500/10 border-red-500/50 text-red-400'
              }`}>
                {status.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p className="text-sm font-medium">{status.message}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/50 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending Email...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message & Get Email
                </>
              )}
            </button>

            {/* Info Box */}
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/10 rounded-lg p-2 mt-0.5">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-blue-300 mb-1">
                    Instant Response
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Once you submit, you'll automatically receive an email with my resume, 
                    portfolio, LinkedIn profile, and contact information. No wait time needed!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-center text-gray-500 text-sm">
              📧 Email powered by automated response • ⚡ Instant delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}