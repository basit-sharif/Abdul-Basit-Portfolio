
export default function ButtonFirst({text}:{text:string}) {
  return (
    <div className="border-[3px] border-[#8DB5EE] dark:border-[#37557a] px-8 py-[0.35rem] rounded-2xl hover:bg-purple-100 cursor-pointer active:bg-purple-200 dark:bg-darkBackgroundTop dark:active:opacity-50 duration-200">{text}</div>
  )
}