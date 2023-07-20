export interface WorkingDaysArrayType {
    day: string,
    timing: string,
    icon: any,
}
export interface daysInformationArrayType {
    day: string,
    desc: string,
}

export let daysInformationArray: Array<daysInformationArrayType> = [
    {
        day: "Monday",
        desc: "We are open on Monday from 5:00pm to 3:00am and  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur doloribus perferendis explicabo quod iusto nesciunt nihil ut vitae quidem optio amet possimus error, aperiam tempore aliquam illum nobis dolor exercitationem. Culpa voluptatem aliquid itaque quam beatae deserunt cumque tempora. Quod distinctio voluptatibus architecto nisi corporis saepe deleniti animi provident.",
    },
    {
        day: "Tuesday",
        desc: "We are open on Tuesday from 5:00pm to 3:00am and  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur doloribus perferendis explicabo quod iusto nesciunt nihil ut vitae quidem optio amet possimus error, aperiam tempore aliquam illum nobis dolor exercitationem. Culpa voluptatem aliquid itaque quam beatae deserunt cumque tempora. Quod distinctio voluptatibus architecto nisi corporis saepe deleniti animi provident.",
    },
    {
        day: "Wednesday",
        desc: "We are open on Wednessday from 5:00pm to 3:00am and  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur doloribus perferendis explicabo quod iusto nesciunt nihil ut vitae quidem optio amet possimus error, aperiam tempore aliquam illum nobis dolor exercitationem. Culpa voluptatem aliquid itaque quam beatae deserunt cumque tempora. Quod distinctio voluptatibus architecto nisi corporis saepe deleniti animi provident.",
    },
    {
        day: "Thursday",
        desc: "We are open on Thursday from 5:00pm to 3:00am and  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur doloribus perferendis explicabo quod iusto nesciunt nihil ut vitae quidem optio amet possimus error, aperiam tempore aliquam illum nobis dolor exercitationem. Culpa voluptatem aliquid itaque quam beatae deserunt cumque tempora. Quod distinctio voluptatibus architecto nisi corporis saepe deleniti animi provident.",
    },
    {
        day: "Friday",
        desc: "We are open on Friday from 6:00pm to 3:00am and  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur doloribus perferendis explicabo quod iusto nesciunt nihil ut vitae quidem optio amet possimus error, aperiam tempore aliquam illum nobis dolor exercitationem. Culpa voluptatem aliquid itaque quam beatae deserunt cumque tempora. Quod distinctio voluptatibus architecto nisi corporis saepe deleniti animi provident.",
    },
    {
        day: "Saturday",
        desc: "We are open on Saturday from 5:00pm to 3:00am and  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur doloribus perferendis explicabo quod iusto nesciunt nihil ut vitae quidem optio amet possimus error, aperiam tempore aliquam illum nobis dolor exercitationem. Culpa voluptatem aliquid itaque quam beatae deserunt cumque tempora. Quod distinctio voluptatibus architecto nisi corporis saepe deleniti animi provident.",
    },
    {
        day: "Sunday",
        desc: "We are Closed on Sunday Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia consequuntur doloribus perferendis explicabo quod iusto nesciunt nihil ut vitae quidem optio amet possimus error, aperiam tempore aliquam illum nobis dolor exercitationem. Culpa voluptatem aliquid itaque quam beatae deserunt cumque tempora. Quod distinctio voluptatibus architecto nisi corporis saepe deleniti animi provident.",
    },
]

export const WorkingDaysArray: Array<WorkingDaysArrayType> = [
    {
        day: "Monday",
        timing: "5:00pm to 3:00am",
        icon: "M"
    },
    {
        day: "Tuesday",
        timing: "5:00pm to 3:00am",
        icon: "T"
    },
    {
        day: "Wednesday",
        timing: "5:00pm to 3:00am",
        icon: "W"
    },
    {
        day: "Thursday",
        timing: "5:00pm to 3:00am",
        icon: "T"
    },
    {
        day: "Friday",
        timing: "6:00pm to 3:00am",
        icon: "F"
    },
    {
        day: "Saturday",
        timing: "5:00pm to 3:00am",
        icon: "S"
    },
    {
        day: "Sunday",
        timing: "Closed",
        icon: "S"
    },
]