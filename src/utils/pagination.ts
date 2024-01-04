


const isNumber = (value: string) => /^\d+$/.test(value);

export const getPagination = <T>(
    items: T[],
    postsPerPage = 2,
    currentPage = "1") => {
    if (!isNumber(currentPage)) {
        throw new Error("El número de página no es válido")
    }

    const currePageInt = parseInt(currentPage, 10);
    const totalPosts = items.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    if (currePageInt > totalPages) {
        throw new Error(`Page ${currePageInt} does not exist.`);
    }

    const offset = (currePageInt - 1) * postsPerPage;
    const currentPosts = items.slice(offset, offset + postsPerPage)

    return {
        currentPosts,
        totalPages,

    }
}



