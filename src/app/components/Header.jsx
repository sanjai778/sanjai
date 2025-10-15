import { UserIcon, KeyIcon, ClockIcon, UsersIcon, CubeIcon, ClipboardDocumentListIcon, BuildingOfficeIcon, ComputerDesktopIcon, TruckIcon, ViewfinderCircleIcon, ArrowDownOnSquareIcon, CodeBracketIcon, PuzzlePieceIcon, } from '@heroicons/react/24/outline';
import HeaderContent from './HeaderContent';
import Link from 'next/link';

var Header = function () {
    var platformLinks = [
        { href: "/platform/visitors/", icon: <UserIcon />, title: "Visitor", description: "Manage visitor check-ins and track data securely." },
        { href: "/platform/flexipass/", icon: <KeyIcon />, title: "Flexipass", description: "Streamline contractor access and pass management." },
        { href: "/platform/employees/", icon: <ClockIcon />, title: "Attendance & Time Tracking", description: "Track employee attendance effortlessly and securely." },
        { href: "/platform/queue-management/", icon: <UsersIcon />, title: "Queue", description: "Enhance customer experience with efficient queues." },
        { href: "/platform/deliveries/", icon: <CubeIcon />, title: "Deliveries", description: "Streamline package tracking and delivery notifications." },
        { href: "/platform/material-pass/", icon: <ClipboardDocumentListIcon />, title: "Material Pass", description: "Track all material movements with ease and accuracy." },
        { href: "/platform/rooms/", icon: <BuildingOfficeIcon />, title: "Rooms", description: "Simplify meeting room bookings for better collaboration." },
        { href: "/platform/desk/", icon: <ComputerDesktopIcon />, title: "Desks", description: "Manage desk reservations for a flexible workspace." },
        { href: "/platform/vehicles/", icon: <TruckIcon />, title: "Vehicle Pass", description: "Control vehicle access with effective pass management." },
        { href: "#", icon: <ViewfinderCircleIcon />, title: "Signage", description: "Use digital signage for real-time information sharing." },
    ];
    var platformSecondaryLinks = [
        { href: "/download-apps/", icon: <ArrowDownOnSquareIcon />, title: "Download Apps" },
        { href: "/api/", icon: <CodeBracketIcon />, title: "Api" },
        { href: "/integrations/", icon: <PuzzlePieceIcon />, title: "Integrations" },
    ];
    var solutionsLinks = [
        { href: "/solutions/hybrid-office-management/", title: "Hybrid Office Management", description: "Spanning the Gap Between Office and Remote Work" },
        { href: "/solutions/co-working-management/", title: "Co Working Management", description: "Simplify Operations, Enhance Experience" },
        { href: "/solutions/facility-management/", title: "Facility Management", description: "Transforming Spaces into Efficient Workplaces" },
        { href: "/solutions/tech-park-management/", title: "Tech Park Management", description: "The Future of Workplace Management" },
        { href: "/solutions/centralize-workplace-management/", title: "Centralize Workplace Management", description: "Streamline Your Operations Centralize Workplace Management" },
        { href: "/solutions/employee-tenant-and-visitor-experience/", title: "Employee, tenant and visitor experience", description: "Efficiently manage desk assignments" },
        { href: "/solutions/safety-security-and-compliance/", title: "Safety, security and compliance", description: "Track and resolve facility maintenance" },
        { href: "/solutions/workplace-utilization-and-insights/", title: "Workplace utilization and insights", description: "Optimize Your Workspace - Unlock Efficiency and Insights" },
        { href: "/solutions/workplaces-and-buildings/", title: "Workplaces and buildings", description: "Revolutionizing Workplace and Building Management" },
        { href: "/solutions/sustainable-workplace/", title: "Sustainable Workplace", description: "Building Sustainability into Every Corner" },
    ];
    var solutionsSecondaryLinks = [
        { href: "/solutions/commercial-real-estate-management/", title: "Commerical Real Estate Management", description: "Revolutionize Your Commercial Real Estate Operations" },
        { href: "/solutions/manufacturing-plant-management/", title: "Manufacturing Plant Management", description: "Transform Your Manufacturing Plant Management" },
        { href: "/solutions/industrial-security-management/", title: "Industrial Security Management", description: "Empowering Your Industry's Security" },
        { href: "/solutions/real-estate-digital-twin/", title: "Real estate digital twin", description: "Transform Your Properties into Interactive Digital Twins" },
        { href: "/solutions/proptech-solutions/", title: "Proptech Solutions", description: "Transform Your Property Management" },
    ];
    return (<HeaderContent platformLinks={platformLinks} platformSecondaryLinks={platformSecondaryLinks} solutionsLinks={solutionsLinks} solutionsSecondaryLinks={solutionsSecondaryLinks}/>);
};
export default Header;
