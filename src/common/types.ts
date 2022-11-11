type ImageType = 'PRIMARY';
export interface IHotel {
    id: string;
    property: {
        propertyId: string;
        title: string;
        address: string[];
        previewImage: {
            url: string;
            caption: string;
            imageType: ImageType;
        };
        rating: {
            ratingValue: number;
            ratingType: 'star';
        };
    };
    offer: {
        promotion: {
            title: string;
            type: 'CAMPAIGN';
        };
        name: string;
        displayPrice: {
            amount: number;
            currency: 'AUD';
        };
        savings: {
            amount: number;
            currency: 'AUD';
        };
        cancellationOption: {
            cancellationType: string;
        };
    };
}
