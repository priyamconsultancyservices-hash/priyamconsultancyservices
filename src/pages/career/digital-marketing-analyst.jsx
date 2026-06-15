import JobDetailTemplate from "@site/src/components/JobDetailTemplate";
import { getRoleBySlug } from "@site/src/components/careersData";

const role = getRoleBySlug("digital-marketing-analyst");

export default function Page() {
  if (!role) return <div>Role not found</div>;
  return <JobDetailTemplate role={role} />;
}
