import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Users, Home, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Home, label: 'Properties Sold', value: '500+' },
    { icon: Users, label: 'Happy Clients', value: '1000+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Clock, label: 'Average Sale Time', value: '4 weeks' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">About Key Stone Estates</h1>
          <p className="text-xl text-gray-600">Your trusted partner in UK property</p>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Excellence in Property Services</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2008, Key Stone Estates has established itself as one of London's premier estate and letting agencies. 
                We specialize in residential sales, lettings, and property management across the capital and home counties.
              </p>
              <p className="text-gray-600">
                Our team of experienced professionals combines deep market knowledge with a client-first approach, 
                ensuring every transaction is handled with the utmost care and expertise.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6">
              <img
                src="https://picsum.photos/seed/office-building/600/400"
                alt="Key Stone Estates Office"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <stat.icon className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <CardTitle className="text-2xl text-primary">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe in transparent, honest communication and ethical business practices in all our dealings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service, from initial consultation to completion.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Client Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your needs are our priority. We tailor our services to meet your unique requirements and goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <img
                  src="https://picsum.photos/seed/director1/200/200"
                  alt="Sarah Johnson"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-primary text-center">Sarah Johnson</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 mb-2">Managing Director</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years in property, Sarah leads our team with vision and expertise, 
                  ensuring we deliver exceptional service to every client.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="https://picsum.photos/seed/director2/200/200"
                  alt="Michael Chen"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-primary text-center">Michael Chen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 mb-2">Sales Director</p>
                <p className="text-gray-600 text-sm">
                  Michael's extensive market knowledge and negotiation skills have helped hundreds 
                  of clients achieve their property goals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <img
                  src="https://picsum.photos/seed/director3/200/200"
                  alt="Emma Williams"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <CardTitle className="text-primary text-center">Emma Williams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600 mb-2">Lettings Director</p>
                <p className="text-gray-600 text-sm">
                  Emma specializes in residential lettings and property management, 
                  ensuring smooth tenancies for landlords and tenants alike.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg mb-6">
            Whether you're buying, selling, or letting, our expert team is here to help you achieve your property goals.
          </p>
          <a
            href="/contact"
            className="bg-amber-400 hover:bg-amber-500 text-primary font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;