import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/past")({
  component: PastOrder,
});

function PastOrder() {
  return <div>Hello "/past"!</div>;
}
