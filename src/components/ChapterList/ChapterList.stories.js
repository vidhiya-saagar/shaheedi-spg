import React, { useEffect, useState } from 'react';
import ChapterList from './ChapterList';

export default {
  title: 'Prasang/ChapterList',
  component: ChapterList,
};

const chamkaurChapters = [
  {
    artwork:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e70e2478-3314-4a6b-a9c8-7fced70e6f31/dcheda2-d72bc290-f701-4b21-9e48-a34a8d834769.jpg/v1/fill/w_600,h_343,q_75,strp/anandpur_sahib_vector_art_by_damanpreetsinghkhurl_dcheda2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0zNDMiLCJwYXRoIjoiXC9mXC9lNzBlMjQ3OC0zMzE0LTRhNmItYTljOC03ZmNlZDcwZTZmMzFcL2RjaGVkYTItZDcyYmMyOTAtZjcwMS00YjIxLTllNDgtYTM0YThkODM0NzY5LmpwZyIsIndpZHRoIjoiPD02MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Z1TEp5rNJJUXiUhPt9ExvmC3bAr3MGHI65I4O9q13FQ',
    number: 31,
    gurmukhiScript: 'AnMdpur CoVnw',
    name: 'Leaving Anandpur',
  },
  {
    artwork:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzkD7Fr38S5p9PGO71L0kPojLUHp2HcoPSow&usqp=CAU',
    number: 32,
    gurmukhiScript: 'ipCoN phwVIAW qy sUibAW ny Aw pYxw [',
    name: 'From Behind, The Hill Chiefs and Mughals Attack...',
  },
  {
    artwork:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/00714226-88e5-48cd-8b5e-736f73e06f76/dcnjzs9-e5c73dae-ce30-4a14-9d7d-ea261ced1f3a.png/v1/fill/w_1024,h_1505,q_80,strp/guru_gobind_singh_ji_l_digital_art_by_ms_saluja_by_ms_saluja_dcnjzs9-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNTA1IiwicGF0aCI6IlwvZlwvMDA3MTQyMjYtODhlNS00OGNkLThiNWUtNzM2ZjczZTA2Zjc2XC9kY25qenM5LWU1YzczZGFlLWNlMzAtNGExNC05ZDdkLWVhMjYxY2VkMWYzYS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wfAlqj89jLGU4GjgEnPg5bh4GVB2lzCqfZQVKMfOT7Q',
    number: 33,
    gurmukhiScript: 'BweI jIvn isMG b`D [ jMg',
    name: 'Aftermath of Jeevan Singh. Battle.',
  },
];
export const ChamkaurChapters = () => (
  <ChapterList chapters={chamkaurChapters} />
);
