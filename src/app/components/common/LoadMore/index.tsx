import { Loader } from "lucide-react";

export const LoadMore = () => {
    return (
        <div className="grid place-items-center md:col-span-3 p-10">
            <Loader className="animate-spin" />
        </div>
    );
}
