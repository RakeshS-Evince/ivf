import ButterCms from 'buttercms';
const butter = ButterCms(import.meta.env.VITE_AUTH_TOKEN)
export const useButterCms = () => {
    const getPage = async (page_slug, pagetype = "*") => {
        return butter.page.retrieve(pagetype, page_slug)
    }
    const getCollections = async (collection_name) => {
        return butter.content.retrieve([collection_name])
    }
    const getBlogs = async (page, page_size) => {
        return butter.post.list({
            page: page,
            page_size: page_size
        })
    }
    const searchBlog = async (searchKeyword, page_size) => {
        return butter.post.search(searchKeyword, {
            page_size: page_size | 6
        })
    }
    const getBlog = async (slug) => {
        return butter.post.retrieve(slug)
    }

    return { getPage, getCollections, getBlogs, searchBlog, getBlog }
}