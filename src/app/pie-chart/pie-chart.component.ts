import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html'
})
export class PieChartComponent implements OnInit {

  @ViewChild('chart')
  private chartContainer: ElementRef;
  constructor(
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.chartContainer = this.chartContainer;
      this.createChart();
    }, 0);

  }

  createChart() {
    const element = this.chartContainer.nativeElement;
    const svg = d3.select(element).append('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight)
      .attr('stroke', 'white')

    const data = [10, 15];

    const width: number = +svg.attr('width');
    const height: number = +svg.attr('height');

    const radius = Math.min(width, height) / 2;
    const g = svg.append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    const arc = d3.arc()
      .outerRadius(radius)
      .innerRadius(40)

    const label = d3.arc()
      .outerRadius(radius)
      .innerRadius(radius - 35)

    const group = g.selectAll('arc')
      .data(d3.pie()(data))
      .enter()

    // gradients
    const defs0 = svg.append('defs');
    const bgGradient0 = defs0
      .append('linearGradient')
      .attr('id', 'gradient0')
      .attr('gradientTransform', 'rotate(45)');
    bgGradient0
      .append('stop')
      .attr('stop-color', 'mediumaquamarine')
      .attr('offset', '0%');
    bgGradient0
      .append('stop')
      .attr('stop-color', 'mediumseagreen')
      .attr('offset', '100%');

    const defs1 = svg.append('defs');
    const bgGradient = defs1
      .append('linearGradient')
      .attr('id', 'gradient1')
      .attr('gradientTransform', 'rotate(45)');
    bgGradient
      .append('stop')
      .attr('stop-color', 'cadetblue')
      .attr('offset', '0%');
    bgGradient
      .append('stop')
      .attr('stop-color', 'darkturquoise')
      .attr('offset', '100%');



    group
      .append('path')
      .attr('fill', (d, i) => {
        return `url(#gradient${i})`
      })
      .transition()
      .duration(1000)
      .attrTween('d', (d): any => {
        var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
        return t => {
          d.endAngle = i(t);
          return arc(<any>d);
        }
      });

    group
      .append('text')
      .attr('fill', 'transparent')
      .transition()
      .duration(1000)
      .attr('transform', (d) => {
        return 'translate(' + label.centroid(d as any) + ')';
      })
      .attr('fill', 'white')
      .attr('stroke', 'rgba(0, 0, 0, 0.7)')
      .attr('font-size', '0.7rem')
      .attr('stroke-width', '1px')
      .text((d) => { return '' + d.data; })
  }


}
