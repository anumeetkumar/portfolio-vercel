import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Get In Touch
        </h1>
        <div className="mt-2 h-1 w-20 bg-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Have a question or want to work together? Feel free to reach out
          through any of these channels or use the contact form below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <Link href="mailto:anumeet.dev@gmail.com" className="hover:text-primary transition-colors">
                  anumeet.dev@gmail.com
                </Link>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <Link href="tel:+917658044490" className="hover:text-primary transition-colors">
                  +91 7658044490
                </Link>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <p>Mohali, India</p>
              </div>

              <div className="pt-4 flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://github.com/anumeetkumar/anumeetkumar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5 scale-150" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://www.linkedin.com/in/anumeet-kumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5 scale-150" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                {/* <Button variant="outline" size="icon" asChild>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button> */}
              </div>
            </CardContent>
          </Card>

          <div className="h-80 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109744.05905969579!2d76.69741822812666!3d30.698370329956275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee906da6f81f%3A0x512998f16ce508d8!2sSahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1708520407953!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mohali Map Location"
            ></iframe>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject of your message" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="consent"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label
                    htmlFor="consent"
                    className="text-sm text-muted-foreground"
                  >
                    I agree to the processing of my personal data in accordance
                    with the privacy policy.
                  </label>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
