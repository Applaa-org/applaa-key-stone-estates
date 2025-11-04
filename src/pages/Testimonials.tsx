import { testimonials } from '@/data/testimonials';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Client Testimonials</h1>
        <p className="text-xl text-gray-600">See what our clients say about working with Key Stone Estates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="relative">
            <CardHeader>
              <Quote className="h-8 w-8 text-amber-400 absolute top-4 right-4" />
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Success Stats */}
      <div className="bg-white rounded-lg shadow-lg p-8 mt-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Success Stories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">4.9/5</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
            <p className="text-gray-600">Properties Sold</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-600 mb-2">4 weeks</div>
            <p className="text-gray-600">Average Sale Time</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Join Our Satisfied Clients</h2>
        <p className="text-xl text-gray-600 mb-6">
          Experience the Key Stone Estates difference. Let us help you with your property needs.
        </p>
        <a
          href="/contact"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Contact Us Today
        </a>
      </div>
    </div>
  );
};

export default Testimonials;