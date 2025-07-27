import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

const MermaidDiagram = ({ chart, id, className = "" }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      themeCSS: `
        .node rect {
          fill: #f8fafc !important;
          stroke: #3b82f6 !important;
          stroke-width: 2px !important;
        }
        .node .label {
          color: #1f2937 !important;
          font-weight: 600 !important;
        }
        .edgePath .path {
          stroke: #6b7280 !important;
          stroke-width: 2px !important;
        }
        .arrowheadPath {
          fill: #6b7280 !important;
        }
        .cluster rect {
          fill: #f0f9ff !important;
          stroke: #3b82f6 !important;
          stroke-width: 1px !important;
          rx: 8px !important;
        }
      `
    })
  }, [])

  useEffect(() => {
    if (chartRef.current && chart) {
      mermaid.render(`mermaid-${id}`, chart).then((result) => {
        if (chartRef.current) {
          chartRef.current.innerHTML = result.svg
        }
      }).catch((error) => {
        console.error('Mermaid rendering error:', error)
        if (chartRef.current) {
          chartRef.current.innerHTML = `<div class="text-red-500 p-4">다이어그램 렌더링 오류</div>`
        }
      })
    }
  }, [chart, id])

  if (!chart) {
    return <div className="text-gray-500 p-4">다이어그램이 없습니다.</div>
  }

  return (
    <div className={`mermaid-container overflow-x-auto ${className}`}>
      <div ref={chartRef} className="flex justify-center" />
    </div>
  )
}

export default MermaidDiagram