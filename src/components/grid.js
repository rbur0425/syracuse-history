import React from "react";
import Card from "./card";
import { StaticQuery, graphql } from 'gatsby'

export default function Grid({data}) {
    return (
        <StaticQuery query = {graphql`
        query IGQuery {
          allInstaNode {
            nodes {
              id
              comments
              likes
              original
              username
              mediaType
              caption
              thumbnails {
                config_height
                config_width
                src
              }
            }
            totalCount
          }
        }
        `}
        render = {data => (
        <div className="text-white bg-repeat w-full -mt-60">
          <div className="flex flex-wrap items-center justify-center w-3/4 mx-auto">
            
              {data.allInstaNode.nodes.map(post => (
                <Card post={post} key={post.id} />
              ))}

          </div>
        
        </div>
        )}
      />
    )
}