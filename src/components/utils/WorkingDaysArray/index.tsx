export interface WorkingDaysArrayType {
    day:string,
    timing:string,
    icon:any,
}


export const WorkingDaysArray : Array<WorkingDaysArrayType> = [
    {
        day:"Monday",
        timing:"5:00pm to 3:00am",
        icon:"M"
    },
    {
        day:"Tuesday",
        timing:"5:00pm to 3:00am",
        icon:"T"
    },
    {
        day:"Wednesday",
        timing:"5:00pm to 3:00am",
        icon:"W"
    },
    {
        day:"Thursday",
        timing:"5:00pm to 3:00am",
        icon:"T"
    },
    {
        day:"Friday",
        timing:"6:00pm to 3:00am",
        icon:"F"
    },
    {
        day:"Saturday",
        timing:"5:00pm to 3:00am",
        icon:"S"
    },
    {
        day:"Sunday",
        timing:"Closed",
        icon:"S"
    },
]