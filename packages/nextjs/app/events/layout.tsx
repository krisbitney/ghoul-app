import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Events",
  description: "Ghoulish event histories",
});

const EventsLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default EventsLayout;
