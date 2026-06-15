from pyscript import web, when

start_button=web.button(
    "start!",
    classes=["start-button"]
)
welcome_message=web.h2(
    "Welcome to our wordle!!"
)
welcome_paragraph=web.p(
    "Try to guess the 5 letter word in 6 tries or less!"
)
welcome_window=web.div(
    children=[welcome_message,welcome_paragraph,start_button],
    classes=["overlay-content"]
)
overlay_div=web.div(
    children=[welcome_window],
    classes=["overlay-background"]
)


web.page.append(overlay_div)

@when("click",selector=start_button)
def start_game(event):
    overlay_div._dom_element.remove()