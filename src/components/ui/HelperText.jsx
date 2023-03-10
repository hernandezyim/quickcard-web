export default function HelperText({ msg }) {
  if (!msg) return null

  return (
    <div className="flex items-center my-2 text-red-500">
      <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 1c6.076 0 11 4.924 11 11s-4.924 11-11 11-11-4.924-11-11 4.924-11 11-11zm0-1C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
        />
        <path
          fillRule="evenodd"
          d="M10.023 6.913c-.393 0-.708.337-.708.75v5.574c0 .413.315.75.708.75h3.955c.393 0 .708-.337.708-.75v-5.574c0-.413-.315-.75-.708-.75h-3.955zM12 16.222c-.827 0-1.5-.673-1.5-1.5 0-.827.673-1.5 1.5-1.5.827 0 1.5.673 1.5 1.5 0 .827-.673 1.5-1.5 1.5z"
        />
      </svg>
      <span className="font-bold">{msg}</span>
    </div>
  )
}
