const sortByDate = (entries) => {
	return entries.sort((a, b) => new Date(b.last_modified) - new Date(a.last_modified))
}

const sortByTitle = (entries) => {
	return entries.sort((a, b) => a.title.localeCompare(b.title))
}

export { sortByDate, sortByTitle }
