import React, { useState, useEffect } from 'react';
import "./footer.css"

export default function Comments() {
     const [comments, setComments] = useState([]);
     const [loading, setLoading] = useState(true);
     const [editIndex, setEditIndex] = useState(null);
     const [editValue, setEditValue] = useState(""); 
     const [replyIndex, setReplyIndex] = useState(null);
     const [replyValue, setReplyValue] = useState(""); 

     const date = new Date();
     const hours = date.getHours();
     const minutes = date.getMinutes();
     const postTime = `${hours}:${minutes}`;

     const hi = (!postTime);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await fetch('Comments.json');
                    const data = await response.json();
                    const commentsWithReplies = data.map(comment => ({ ...comment, replies: [] }));
                    setComments(commentsWithReplies);
                    setLoading(false);
               } catch (error) {
                    console.error('Error fetching comments:', error);
               }
          };

          fetchData();
     }, []);

     if (loading) {
          return <div>Loading...</div>;
     }

     const handleEdit = (index) => {
          setEditIndex(index);
          setEditValue(comments[index].comment);
     }

     const handleSave = (index) => {
          const updatedComments = [...comments];
          updatedComments[index].comment = editValue;
          updatedComments[index].edited = true; 
          setComments(updatedComments);
          setEditIndex(null);
     }

     const handleReply = (index, Id) => {
          const replyIndexToUse = index !== null && index !== undefined ? { index, Id } : null;
          setReplyIndex(replyIndexToUse);
          setReplyValue(""); 
     }

     const handleReplySubmit = (parentIndex, parentId) => {
          const updatedComments = [...comments];
          const parentComment = updatedComments[parentIndex];
      

          if (!parentComment) {
              console.error('Parent comment is not defined.');
              return;
          }
      

          let parentReply;
          if (parentId) {
              parentReply = parentComment.replies.find(reply => reply.Id === parentId);
          }
      

          const newId = parentReply ? parentReply.Id * 10 + 1 : parentComment.Id * 10 + 1;
      
     
          const updatedParentId = parentId ? parentId : parentComment.Id;
      
          const replyId = parentId ? `${updatedParentId}.${newId}` : `${parentComment.Id}.${newId}`;
      
          if (parentReply) {
              parentReply.replies.push({
                  username: "Ditmar",
                  postTime: `${hours}:${minutes}`,
                  comment: replyValue,
                  Id: replyId 
              });
          } else {
              if (!parentComment.replies) {
                  parentComment.replies = [];
              }
              parentComment.replies.push({
                  username: "Ditmar",
                  postTime: `${hours}:${minutes}`,
                  comment: replyValue,
                  Id: replyId 
              });
          }
          setComments(updatedComments);
          setReplyIndex(null);
      }
      
      
     

     return (
          <div className="flex justify-center">
               <div className='flex flex-col items-center h-screen max-h-[80vh] overflow-y-auto'>
                    {comments.map((comment, index) => (
                         <div key={index} className="max-w-xs border border-gray-300 rounded-lg p-4 extra-styling-comments mb-4">
                              <div className="flex justify-between items-center mb-4">
                                   <div className='flex items-center space-x-4'>
                                        <h1 className="text-xl font-bold mb-1">{comment.username}</h1>
                                        <p className="text-gray-500">Posted at {comment.postTime}</p>
                                   </div>
                                   {comment.edited && <p className="text-gray-500 edited-class ml-2">Edited</p>}
                              </div>
                              {editIndex === index ? (
                                   <div className='flex justify-start'>
                                        <input type="text" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                                        <button className="px-2 py-1 mt-4 gray-500 Reply-btn-color" onClick={() => handleSave(index)}>Save</button>
                                   </div>
                              ) : (
                                   <div className='flex justify-start'>
                                        <p>{comment.comment}</p>
                                        <button className="px-2 py-1 mt-4 gray-500 Reply-btn-color" onClick={() => handleEdit(index)}>Edit</button>
                                   </div>
                              )}
                              <div className='flex justify-start'>
                                   {replyIndex && replyIndex.index === index ? (
                                        <div>
                                             <input type="text" value={replyValue} onChange={(e) => setReplyValue(e.target.value)} />
                                             <button className="px-2 py-1 mt-4 gray-500 Reply-btn-color" onClick={() => handleReplySubmit(index)}>Reply</button>
                                        </div>
                                   ) : (
                                        <button className="px-2 py-1 mt-4 gray-500 Reply-btn-color" onClick={() => handleReply(index, comment.Id)}>Reply...</button>
                                   )}
                              </div>
                              {comment.replies && comment.replies.map((reply, replyIndex) => (
                                   <div key={replyIndex} className="max-w-xs border border-gray-300 rounded-lg p-4 extra-styling-comments mb-4 ml-6">
                                        <div className="flex justify-between items-center mb-4">
                                             <div className='flex items-center space-x-4'>
                                                  <h1 className="text-xl font-bold mb-1">{reply.username}</h1>
                                                  <p className="text-gray-500">Posted at {reply.postTime}</p>
                                             </div>
                                        </div>
                                        <div className='flex justify-start'>
                                             <p>{reply.comment}</p>
                                             <div className='flex justify-end'>
                                             <button className="px-2 py-1 mt-4 gray-500 Reply-btn-color" onClick={() => handleReply(index, reply.Id)}>Reply...</button>
                                             <p>{hi}</p>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    ))}
               </div>
          </div>
     );
}
