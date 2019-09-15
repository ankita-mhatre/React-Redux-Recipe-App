const initState = {
    posts: [
        { id: '1', title: 'Pappardelle Bolognese', body: 'Once the pasta has finished cooking, you want to remove it immediately from the hot water; if it sits, it will continue to cook.To help the sauce adhere better to the pasta, put the sauce in a broad skillet or saute pan and heat it while the pasta cooks.' },
        { id: '2', title: 'Fusilli', body: 'You might think a bit of salt in the water is an optional step, but it is actually an important one. The salt will flavor the pasta from the inside out, bringing more depth to the final dish and not relying on the sauce to do all of the work.' },
        { id: '3', title: 'Quattro Formaggio', body: 'Bring a large pot of lightly salted water to a boil. Add the butter to a large skillet over medium heat and add the mushrooms and garlic. Cook until browned, about 5 minutes, then add the wine and cook until evaporated.' }
    ]
}



const rootReducer = (state = initState, action) => {
    console.log(action);
    if (action.type === 'DELETE_POST') {
        // newposts is an array which has filtered out the posts which are not the post to be deleted
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer
