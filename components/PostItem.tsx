type Post = any;

const PostItem = ({ post }: { post: Post }) => {
  return (
    <li className="mb-2 last:mb-0">
      <a href="#" className="text-base block truncate">
        記事のタイトル入ります記事のタイトル入ります記事のタイトル入ります記事のタイトル入ります
      </a>
      <p className="text-sm">
        <span className="mr-2">2022.02.27</span>
        <span>tagが入るかも</span>
      </p>
    </li>
  );
};

export default PostItem;
