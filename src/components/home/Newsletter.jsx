import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Button from '../ui/Button';
import toast from 'react-hot-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('নিউজলেটার সাবস্ক্রিপশন সফল হয়েছে!');
    setEmail('');
    setLoading(false);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Newsletter Background"
          className="w-full h-full object-cover"
         loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 to-emerald-900/90" />
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <EnvelopeIcon className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            সেরা অফার পান ইনবক্সে
          </h2>
          <p className="text-xl text-stone-200 mb-8">
            সাবস্ক্রাইব করুন এবং পান বিশেষ ছাড়, নতুন প্যাকেজ ও ভ্রমণ টিপস
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="আপনার ইমেইল"
              required
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl text-white placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={loading}
              className="px-8"
            >
              সাবস্ক্রাইব
            </Button>
          </form>

          <p className="text-sm text-stone-300 mt-4">
            সপ্তাহে ২টি ইমেইল। যেকোনো সময় আনসাবস্ক্রাইব করতে পারবেন।
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;