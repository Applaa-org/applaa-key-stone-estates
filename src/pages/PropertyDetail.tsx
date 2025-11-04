import { useParams } from '@tanstack/react-router';
import { properties } from '@/data/properties';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bed, Bath, Square, MapPin, PoundSterling, Calendar, Check } from 'lucide-react';
import { useState } from 'react';
import { showSuccess } from '@/utils/toast';

const PropertyDetail = () => {
  const { propertyId } = useParams({ from: '/properties/$propertyId' });
  const property = properties.find(p => p.id === propertyId);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Property Not Found</h1>
          <p className="text-gray-600">The property you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleViewingRequest = () => {
    showSuccess('Viewing request sent! We will contact you shortly to arrange a convenient time.');
  };

  const handleEnquiry = () => {
    showSuccess('Enquiry sent! Our team will get back to you soon.');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <a href="/properties" className="text-primary hover:underline">
            ← Back to Properties
          </a>
        </div>

        {/* Property Title and Price */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-primary mb-2">{property.title}</h1>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-gray-600" />
            <span className="text-lg text-gray-600">{property.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <PoundSterling className="h-6 w-6 text-amber-600" />
            <span className="text-3xl font-bold text-amber-600">
              {property.type === 'sale' 
                ? `£${property.price.toLocaleString()}`
                : `£${property.price.toLocaleString()} pcm`
              }
            </span>
            <Badge className="bg-amber-400 text-primary ml-2">
              {property.type === 'sale' ? 'For Sale' : 'To Rent'}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <Card className="mb-6">
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={property.images[currentImageIndex]}
                    alt={`${property.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                {property.images.length > 1 && (
                  <div className="flex gap-2 p-4 overflow-x-auto">
                    {property.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 ${
                          currentImageIndex === index ? 'border-primary' : 'border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-primary">Property Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bed className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-semibold">{property.bedrooms}</p>
                    <p className="text-sm text-gray-600">Bedrooms</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-semibold">{property.bathrooms}</p>
                    <p className="text-sm text-gray-600">Bathrooms</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Square className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-semibold">{property.area.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Sq Ft</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-semibold">Available</p>
                    <p className="text-sm text-gray-600">Now</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{property.longDescription}</p>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6 sticky top-24">
              <CardHeader>
                <CardTitle className="text-primary">Arrange a Viewing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={handleViewingRequest}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Request Viewing
                </Button>
                <Button 
                  onClick={handleEnquiry}
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Send Enquiry
                </Button>
                <div className="text-center text-sm text-gray-600">
                  <p>Call us on:</p>
                  <p className="font-semibold">020 1234 5678</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Similar Properties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {properties
                  .filter(p => p.id !== property.id && p.type === property.type)
                  .slice(0, 3)
                  .map((similarProperty) => (
                    <a
                      key={similarProperty.id}
                      href={`/properties/${similarProperty.id}`}
                      className="block p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={similarProperty.images[0]}
                        alt={similarProperty.title}
                        className="w-full h-32 object-cover rounded mb-2"
                      />
                      <h4 className="font-semibold text-sm text-primary">{similarProperty.title}</h4>
                      <p className="text-xs text-gray-600">{similarProperty.location}</p>
                      <p className="text-sm font-bold text-amber-600">
                        {similarProperty.type === 'sale' 
                          ? `£${similarProperty.price.toLocaleString()}`
                          : `£${similarProperty.price.toLocaleString()} pcm`
                        }
                      </p>
                    </a>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;