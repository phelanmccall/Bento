Pry.prompt = [
                proc { |target_self, nest_level, pry|
                  "\e[1;37m[\e[0m\e" \
                  "[1;34m#{ pry.input_ring.size }\e[0m" \
                  "\e[1;37m]\e[0m" \
                  "\e[1;31m☂\e[0m " \
                  "\e[1;33m‣\e[0m" \
                  "\e[1;32m▹\e[0m" \
                  "\e[1;36m›\e[0m" \
                  " "
                },
            ]
