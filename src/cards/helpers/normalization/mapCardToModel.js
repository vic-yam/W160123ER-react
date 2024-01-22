

export const mapCardToModel = card => ({
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    phone: card.phone,
    email: card.email,
    webUrl: card.web,
    imageUrl: card.image.url,
    imageAlt: card.image.alt,
    ...{...card.address}
});