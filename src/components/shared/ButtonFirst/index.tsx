
export default function ButtonFirst({text}:{text:string}) {
  return (
    <div className="border-2 border-[#8DB5EE] dark:border-[#37557a] px-6 py-[0.30rem] rounded-xl hover:bg-purple-100 cursor-pointer active:bg-purple-200 dark:bg-darkBackgroundTop dark:active:opacity-50 duration-200">{text}</div>
  )
}