import React, { useEffect, useState } from 'react';
import Pauri from './Pauri';

export default {
  title: 'Chapter/Pauri',
  component: Pauri,
};

const pauri = {
  id: 2034,
  number: 1,
  signature_unicode: '॥੧॥',
  signature_gs: ']1]',
  signature_english: '||1||',
  chhand_id: 358,
  chapter_id: 39,
  first_tuk_id: null,
  last_tuk_id: null,
  created_at: '2020-11-28T03:49:36.000Z',
  updated_at: null,
  tuks: [
    {
      id: 7153,
      line_number: 1,
      chhand_id: 358,
      chhand_type_id: 1,
      chapter_id: 39,
      content_unicode: 'ਸਭਿਨਿ ਸੁਨ੍ਯੋ ਗੁਰ ਬਾਕ ਕੋ ਭਏ ਤ੍ਯਾਰ ਸਮੁਦਾਇ ।',
      content_gs: 'siBin sunÎo gur bwk ko Bey qÎwr smudwie [',
      content_transliteration_english:
        'sabhin sunayo gur baak ko bhe tayaar samudhai |',
      first_letters: 'ਸਸਗਬਕਭਤਸ',
      created_at: '2020-11-28T03:49:36.000Z',
      updated_at: '2020-12-07T00:34:00.000Z',
      pauri_id: 2034,
      vishraams: '"[]"',
      thamkis: '"[]"',
    },
    {
      id: 7154,
      line_number: 2,
      chhand_id: 358,
      chhand_type_id: 1,
      chapter_id: 39,
      content_unicode: 'ਆਯੁਧ ਗਨ ਸਿੰਘਨਿ ਧਰੇ ਹੁਇ ਸਵਧਾਨ ਤਦਾਇ',
      content_gs: 'AwXuD gn isMGin Dry huie svDwn qdwie',
      content_transliteration_english:
        'aayudh gan si(n)ghan dhare hui savadhaan tadhai',
      first_letters: 'ਆਗਸਧਹਸਤ',
      created_at: '2020-11-28T03:49:36.000Z',
      updated_at: '2020-12-07T00:34:00.000Z',
      pauri_id: 2034,
      vishraams: '[]',
      thamkis: '[]',
    },
  ],
};

export const Chapter31PauriNumber1 = () => (
  <Pauri id={pauri.id} number={pauri.number} tuks={pauri.tuks} />
);

// Get on the same page:
//   Overview:
//   * The SPG API
//   * Rut 6 (Chamkaur Parts) is added (just needs some editing)

//   GOAL:
//     * Shine light to SPG and Kavi Ji
//     * Commoerate the Shaheed Singhs
//     * Shine light to the arts

// Objective:
//   * Create an web based application that promotes SPG by

// Currently:
//   * We can read the contents of the Adhyai's
//   * We can add Katha mp3 files to the respective chapter
//   * We can add artwork to the chapters

// Siutations:
//   * Front-end design is hard (but will be taken care of)
//   * Intro/writing (need support.)
//   * Art is a huge panga

// Questions for you:
//   * There is very little effort going towards any "translations."
//     > translating each pauri, is out of the question...
//     > Should the title and stuff be the english translation or transliteration or what?
//   * I need someone that can write. We asked Kirany.
//   * How the hell do we get this art done?
