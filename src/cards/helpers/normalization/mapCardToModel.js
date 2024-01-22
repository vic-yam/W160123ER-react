

export const mapCardToModel = card => ({
    ...card,
    imageURL: card.image.url,
    imageAlt: card.image.alt,
    ...{...card.address}
});