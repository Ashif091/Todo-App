interface Props {
  chageTheme: (data: number) => void
  theme?: Number
}

const style = "  rounded-full ring-blue-500  bg-center bg-cover"

function ThemeChager({chageTheme,theme}: Props) {
  return (
    <div className="flex justify-center items-center h-72 left-0 max-h-11">
      <div className="flex space-x-4">
        <div
          className={theme===1?"w-10 h-10 ring-2 bg-custom-background-1" + style : `${style} w-9 h-9  ring-1 bg-custom-background-1`}
          onClick={() => chageTheme(1)}
        ></div>
        <div
          className={theme===2?"w-10 h-10 ring-2 bg-custom-background-2" + style : `${style} w-9 h-9  ring-1 bg-custom-background-2`}
          onClick={() => chageTheme(2)}
        ></div>
        <div
          className={theme===3?"w-10 h-10 ring-2 bg-custom-background-3" + style : `${style} w-9 h-9  ring-1 bg-custom-background-3`}
          onClick={() => chageTheme(3)}
        ></div>
        <div
          className={theme===4?"w-10 h-10 ring-2 bg-custom-background-4" + style :  `${style} w-9 h-9  ring-1 bg-custom-background-4`}
          onClick={() => chageTheme(4)}
        ></div>
      </div>
    </div>
  )
}

export default ThemeChager
