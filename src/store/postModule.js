import axios from "axios";
export const postModule = {
    state: () => ({
        posts: [],
        page: 1,
        limit: 10,
        totalPages: 10,

    }),
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        changePage(state, pageNumber){
            state.page = pageNumber
        },
        setPage(state, payload) {
            state.page = payload;
        },
        setTotalPage(state, totalPages) {
            state.setTotalPage = totalPages
        },

    },
    actions: {
        async fetchPosts({
            state,
            commit
        }) {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                    },
                });
                commit('setTotalPage', Math.ceil(response.headers["x-total-count"] / state.limit));
                commit('setPosts', response.data);
            } catch (e) {
                console.log(e);
            }
        },
        changePage({commit}, payload){
            commit('setPage', payload)
        }
    },
    namespaced: true,
}