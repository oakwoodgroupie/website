---
title: 'News'
header: "Latest updates"
# summary: "Please write to us at info@aerlytix.com if you have a media enquiries. We'll do our best to get back to you as soon as possible."
getInTouch: 'true'
layout: 'layouts/feed.html'
pagination:
  data: collections.news
  size: 9
permalink: '/company/news{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---
