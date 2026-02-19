
import AirportTransfersPageContent from '@/components/services/AirportTransfersPageContent';
import serviceData from '@/data/serviceData';

export const metadata = {
    title: serviceData['airport-transfers'].metaTitle,
    description: serviceData['airport-transfers'].metaDescription,
};

export default function AirportTransfersPage() {
    return <AirportTransfersPageContent />;
}
