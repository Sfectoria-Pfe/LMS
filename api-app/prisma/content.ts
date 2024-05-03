import { typeContent } from "@prisma/client";

export const content = [
  {
    contentname: 'HTMLpdf',
    type: typeContent.pdf,
    contentURL:
      'http://localhost:5000/upload/seed/3f19108cdf7934618384f92210243f80e9.pdf',
    lessonId: 1,
  },
  {
    contentname: 'HTMLvideo',
    type: typeContent.video,
    contentURL:
      'http://localhost:5000/upload/seed/75dfaa29e14a5a4d36a3d7638792bd47.mp4',
    lessonId: 1,
  },
  {
    contentname: 'CSSpdf',
    type: typeContent.pdf,
    contentURL:
      'http://localhost:5000/upload/seed/fe25898a4110de105a65dc68d4bc5484cb.pdf',
    lessonId: 2,
  },
  {
    contentname: 'Bootstrapdf',
    type: typeContent.pdf,
    contentURL:
      'http://localhost:5000/upload/seed/7118e35a31e38ce7d61e59bf1e552a107.pdf',
    lessonId: 3,
  },
];