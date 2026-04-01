export const posts = {
  success: true,
  message: 'Posts fetched successfully',
  data: [
    {
      _id: 'p1001',
      userId: {
        _id: 'u101',
        name: 'Rahul Sharma',
        email: 'rahul@example.com',
      },
      content: 'Enjoying the sunset at the beach 🌅',
      media: [
        {
          _id: 'm1',
          url: 'https://picsum.photos/seed/beach/800/600',
          type: 'image',
        },
      ],
      likeCount: 12,
      commentCount: 2,
      isLiked: true,
      latestComments: [
        {
          _id: 'c101',
          postId: 'p1001',
          userId: {
            _id: 'u201',
            name: 'Anita Roy',
            email: 'anita@example.com',
          },
          comment: 'Beautiful view!',
          createdAt: '2026-03-13T10:10:00Z',
          updatedAt: '2026-03-13T10:10:00Z',
        },
        {
          _id: 'c102',
          postId: 'p1001',
          userId: {
            _id: 'u202',
            name: 'Rohit Das',
            email: 'rohit@example.com',
          },
          comment: 'Where is this place?',
          createdAt: '2026-03-13T10:15:00Z',
          updatedAt: '2026-03-13T10:15:00Z',
        },
      ],
      createdAt: '2026-03-13T10:00:00Z',
      updatedAt: '2026-03-13T10:00:00Z',
    },
    {
      _id: 'p1002',
      userId: {
        _id: 'u102',
        name: 'Priya Patel',
        email: 'priya@example.com',
      },
      content: 'Morning workout done 💪',
      media: [
        {
          _id: 'm2',
          url: 'https://picsum.photos/seed/workout/800/600',
          type: 'image',
        },
      ],
      likeCount: 25,
      commentCount: 1,
      isLiked: false,
      latestComments: [
        {
          _id: 'c103',
          postId: 'p1002',
          userId: {
            _id: 'u203',
            name: 'Sneha Patel',
            email: 'sneha@example.com',
          },
          comment: 'Great motivation!',
          createdAt: '2026-03-13T08:45:00Z',
          updatedAt: '2026-03-13T08:45:00Z',
        },
      ],
      createdAt: '2026-03-13T08:30:00Z',
      updatedAt: '2026-03-13T08:30:00Z',
    },
    {
      _id: 'p1003',
      userId: {
        _id: 'u103',
        name: 'Amit Kumar',
        email: 'amit@example.com',
      },
      content: 'Check out this cool drone shot!',
      media: [
        {
          _id: 'm3',
          url: 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
          type: 'video',
        },
      ],
      likeCount: 40,
      commentCount: 2,
      isLiked: true,
      latestComments: [
        {
          _id: 'c104',
          postId: 'p1003',
          userId: {
            _id: 'u204',
            name: 'Arjun Kumar',
            email: 'arjun@example.com',
          },
          comment: 'Awesome drone footage!',
          createdAt: '2026-03-12T18:20:00Z',
          updatedAt: '2026-03-12T18:20:00Z',
        },
        {
          _id: 'c105',
          postId: 'p1003',
          userId: {
            _id: 'u205',
            name: 'Pooja Singh',
            email: 'pooja@example.com',
          },
          comment: 'Which drone did you use?',
          createdAt: '2026-03-12T18:30:00Z',
          updatedAt: '2026-03-12T18:30:00Z',
        },
      ],
      createdAt: '2026-03-12T18:00:00Z',
      updatedAt: '2026-03-12T18:00:00Z',
    },
    {
      _id: 'p1004',
      userId: {
        _id: 'u104',
        name: 'Neha Singh',
        email: 'neha@example.com',
      },
      content: 'Just finished reading a great book 📚',
      media: [
        {
          _id: 'm4',
          url: 'https://picsum.photos/seed/book/800/600',
          type: 'image',
        },
      ],
      likeCount: 8,
      commentCount: 1,
      isLiked: false,
      latestComments: [
        {
          _id: 'c106',
          postId: 'p1004',
          userId: {
            _id: 'u206',
            name: 'Vikram Mehta',
            email: 'vikram@example.com',
          },
          comment: 'Nice! Which book?',
          createdAt: '2026-03-12T21:10:00Z',
          updatedAt: '2026-03-12T21:10:00Z',
        },
      ],
      createdAt: '2026-03-12T21:00:00Z',
      updatedAt: '2026-03-12T21:00:00Z',
    },
    {
      _id: 'p1005',
      userId: {
        _id: 'u105',
        name: 'Sanjay Gupta',
        email: 'sanjay@example.com',
      },
      content: 'Weekend trip to the mountains 🏔️',
      media: [
        {
          _id: 'm5',
          url: 'https://picsum.photos/seed/mountains/800/600',
          type: 'image',
        },
        {
          _id: 'm6',
          url: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
          type: 'video',
        },
      ],
      likeCount: 55,
      commentCount: 2,
      isLiked: true,
      latestComments: [
        {
          _id: 'c107',
          postId: 'p1005',
          userId: {
            _id: 'u207',
            name: 'Riya Kapoor',
            email: 'riya@example.com',
          },
          comment: 'Wow amazing place!',
          createdAt: '2026-03-11T16:00:00Z',
          updatedAt: '2026-03-11T16:00:00Z',
        },
        {
          _id: 'c108',
          postId: 'p1005',
          userId: {
            _id: 'u208',
            name: 'Manish Verma',
            email: 'manish@example.com',
          },
          comment: 'Looks peaceful 😍',
          createdAt: '2026-03-11T16:10:00Z',
          updatedAt: '2026-03-11T16:10:00Z',
        },
      ],
      createdAt: '2026-03-11T15:45:00Z',
      updatedAt: '2026-03-11T15:45:00Z',
    },
  ],
};

export const comments = {
  success: true,
  message: 'Comments fetched successfully',
  data: [
    {
      _id: 'c101',
      postId: 'p1001',
      userId: {
        _id: 'u201',
        name: 'Anita Roy',
        email: 'anita@example.com',
      },
      comment: 'Amazing picture! 🔥',
      createdAt: '2026-03-13T10:10:00Z',
      updatedAt: '2026-03-13T10:10:00Z',
    },
    {
      _id: 'c102',
      postId: 'p1001',
      userId: {
        _id: 'u202',
        name: 'Rohit Das',
        email: 'rohit@example.com',
      },
      comment: 'Where is this place?',
      createdAt: '2026-03-13T10:15:00Z',
      updatedAt: '2026-03-13T10:15:00Z',
    },
    {
      _id: 'c103',
      postId: 'p1002',
      userId: {
        _id: 'u203',
        name: 'Sneha Patel',
        email: 'sneha@example.com',
      },
      comment: 'Great motivation 💪',
      createdAt: '2026-03-13T08:45:00Z',
      updatedAt: '2026-03-13T08:45:00Z',
    },
    {
      _id: 'c104',
      postId: 'p1003',
      userId: {
        _id: 'u204',
        name: 'Arjun Kumar',
        email: 'arjun@example.com',
      },
      comment: 'That drone shot is awesome!',
      createdAt: '2026-03-12T18:20:00Z',
      updatedAt: '2026-03-12T18:20:00Z',
    },
    {
      _id: 'c105',
      postId: 'p1003',
      userId: {
        _id: 'u205',
        name: 'Pooja Singh',
        email: 'pooja@example.com',
      },
      comment: 'Which drone did you use?',
      createdAt: '2026-03-12T18:30:00Z',
      updatedAt: '2026-03-12T18:30:00Z',
    },
    {
      _id: 'c106',
      postId: 'p1004',
      userId: {
        _id: 'u206',
        name: 'Vikram Mehta',
        email: 'vikram@example.com',
      },
      comment: 'Nice! I love reading too 📚',
      createdAt: '2026-03-12T21:10:00Z',
      updatedAt: '2026-03-12T21:10:00Z',
    },
  ],
};
