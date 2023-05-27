import { RecentProjectsCards } from "@/components/utils/RecentProjectsCardsTypes";
import RecentProjectCard from "@/components/viewComponents/RecentProjectCard/RecentProjectCard";

export default function RecentProjects() {
    return (
        <div className={`py-8 text-center w-full bg-[#F3F4F6] dark:bg-gradient-to-tl  from-darkBackgroundBottom via-darkBackgroundTop to-darkBackgroundBottom`}>
            {/* <a id="projects"></a> */}
            <div id="projects" />
            <p className="text-4xl font-semibold underline">Recent Projects</p>
            <div className="mt-10 px-2 md:px-4">
                <RecentProjectCard RecentProjectsCards={RecentProjectsCards} />
            </div>
        </div>
    )
}

