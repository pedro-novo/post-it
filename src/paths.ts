const paths = {
  home() {
    return "/";
  },
  topicPage(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },
  postCreation(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`;
  },
  postPage(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`;
  },
};

export default paths;
