const paginate = (followers) => {
  const itemsPerPage = 10;
  const pages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    const end = start + itemsPerPage;
    return followers.slice(start, end);
  });

  return newFollowers;
};

export default paginate;
