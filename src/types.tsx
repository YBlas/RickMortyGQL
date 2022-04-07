
export type CharactersProps = {
    page: number
}

export type IndexProps = {
    page: number,
    changePage: (page: number) => void
}

export type CharactersType = {
    characters: {
        info: {
            pages: number
        }
        results:
        Array<CharacterType>

    }
}

export type ModalCharacterProps = {
    character: CharacterType,
    show: boolean
}

export type CharacterType = {
    name: string,
    id: number,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        id: number,
        name: string,
        type: string,
        dimension: string
    },
    location: {
        id: number,
        name: string,
        type: string,
        dimension: string
    },
    image: string
}

export type pagesType = {
    characters: {
        info: {
            pages: number
        }
    }
}