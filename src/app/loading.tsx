import { Icons } from "@/components/Icons";

const Loading = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4">
      <Icons.loading className="h-12 w-12 animate-spin" />
    </div>
  );
};

export default Loading;
