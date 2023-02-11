import React, { useEffect, useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import styled from 'styled-components';

const Container = styled.div``;

function RichEdit({ html, onChange, height = '200px' }) {
  const [editorState, setEditorState] = useState(null);
  const controls = useRef([
    'bold',
    'italic',
    'underline',
    'line-height',
    'link',
    'text-color',
    'font-size',
    'text-align',
    'media',
  ]);

  useEffect(() => {
    setEditorState(Editor.createEditorState(html));
    //setEditorState(html);
  }, [html]);

  const changeValue = (editorState) => {
    setEditorState(editorState);
    onChange(editorState.toHTML());
  };

  return (
    <Container>
      <Editor
        value={editorState}
        onChange={changeValue}
        controls={controls.current}
        contentStyle={{ height: '200px' }}
      />
    </Container>
  );
}

export default RichEdit;
