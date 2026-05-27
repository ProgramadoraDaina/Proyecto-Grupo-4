export const glowPointsPlugin = {
    id: "glowPoints",
    beforeDatasetDraw(chart, args, pluginOptions) {
        const { ctx } = chart;
        ctx.save();
        ctx.shadowBlur = 15; // intensidad del brillo
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)"; // color del glow
    },
    afterDatasetDraw(chart) {
        chart.ctx.restore();
    }
};