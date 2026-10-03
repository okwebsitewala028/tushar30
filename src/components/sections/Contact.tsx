
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { sendContactEmail } from "@/app/actions/send-contact-email";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const result = await sendContactEmail(values);

      if (result.success) {
        toast({
          title: "Inquiry Submitted",
          description: "Your inquiry has been submitted successfully. Our team will contact you shortly.",
        });
        form.reset();
      } else {
        console.error("Contact form inquiry failed:", result.error);
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.error || "Could not send your inquiry. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-headline font-bold text-slate-900 mb-8 tracking-tight"
          >
            Connect With Our Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Whether you are looking for audit services, tax advice, or business consultancy, our experts are ready to assist you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-6">
            {[
              { label: "Head Office (Jabalpur)", text: "Khemchand House 948 P-1, Napier Town, Jabalpur, MP", icon: MapPin },
              { label: "Bhopal Branch", text: "F1-502, GLOBUS GREEN ACRES, LALGHATI BHOPAL", icon: MapPin },
              { label: "Direct Contact", text: "+91 94251 53607 | +91 91310 28829", icon: Phone },
              { label: "Email Us", text: "anilkhemchand@gmail.com", icon: Mail },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-6 p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:border-primary/20 transition-all shadow-sm hover:shadow-lg"
              >
                <div className="h-12 w-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-slate-900 mb-2 text-lg">{item.label}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-white border border-slate-100 rounded-[3rem] p-8 sm:p-12 shadow-2xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold tracking-wide">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} className="bg-slate-50 border-slate-200 h-14 rounded-xl focus:ring-primary focus:border-primary text-slate-900 placeholder:text-slate-400" />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold tracking-wide">Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="your@email.com" {...field} className="bg-slate-50 border-slate-200 h-14 rounded-xl focus:ring-primary focus:border-primary text-slate-900 placeholder:text-slate-400" />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold tracking-wide">Mobile Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 XXXXX XXXXX" {...field} className="bg-slate-50 border-slate-200 h-14 rounded-xl focus:ring-primary focus:border-primary text-slate-900 placeholder:text-slate-400" />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold tracking-wide">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" {...field} className="bg-slate-50 border-slate-200 h-14 rounded-xl focus:ring-primary focus:border-primary text-slate-900 placeholder:text-slate-400" />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-semibold tracking-wide">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide details about your inquiry..." 
                          className="min-h-[180px] bg-slate-50 border-slate-200 rounded-xl focus:ring-primary focus:border-primary text-slate-900 placeholder:text-slate-400"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full md:w-auto px-12 gap-3 h-16 rounded-full bg-primary font-bold text-lg hover:bg-primary/90 transition-all shadow-lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                  {isSubmitting ? "Processing..." : "Submit Inquiry"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
