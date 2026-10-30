from flask import Flask, render_template

app = Flask(__name__, static_folder='static', static_url_path='/static')


@app.route('/')
def home():
    # Renders the portfolio template
    return render_template('index.html')


if __name__ == '__main__':
    # Runs the local development server
    app.run(debug=True)