
function LinksFooter({ link, icon }) {
  return (
    <a className="inline-flex bg-heading text-white text-[16px] lg:text-[18px] p-1 lg:p-[6.4px] rounded-sm lg:rounded-lg hover:bg-heading-dark" href={link} target="_blank">{icon}</a>
  )
}

export default LinksFooter
