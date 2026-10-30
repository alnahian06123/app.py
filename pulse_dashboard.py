# from dash import Dash, Input, Output, dcc, html
# import plotly.express as px
#
# app = Dash(__name__)
#
# app.layout = html.Div([
#     html.H1("Pulse Analytics Dashboard"),
#     dcc.Interval(
#         id='update-interval', interval=5000, n_intervals=0
#     ),  # updates every 5s
#     dcc.Graph(id='live-traffic-graph'),
# ])
#
#
# @app.callback(
#     Output('live-traffic-graph', 'figure'),
#     [Input('update-interval', 'n_intervals')],
# )
# def update_metrics(n):
#   # Simulate fetching real-time telemetry data
#   times = ['10:00', '10:05', '10:10', '10:15']
#   traffic = [120, 150, 300, 250]
#
#   fig = px.line(
#       x=times, y=traffic, title='Real-Time Request Traffic (req/sec)'
#   )
#   return fig
#
#
# if __name__ == '__main__':
#   app.run(debug=True)