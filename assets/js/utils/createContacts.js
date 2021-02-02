function createContacts(contacts = []) {
  return contacts
    .map((userLink) => {
      const urlHostName = new URL(userLink).hostname;
      if (iconClasses.has(urlHostName)) {
        return createElement(
          'div',
          {
            classNames: ['link-container'],
          },
          createElement(
            'a',
            {
              attr: new Map().set('href', userLink),
              classNames: ['link'],
            },
            createElement('i', {
              classNames: [...iconClasses.get(urlHostName)],
            })
          )
        );
      }
      return;
    })
    .filter(Boolean);
}
