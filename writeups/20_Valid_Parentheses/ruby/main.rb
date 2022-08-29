# @param {String} s
# @return {Boolean}
def is_valid(s)
    return false if s.length.odd?
    
    sieve_str(s)
end

def sieve_str(s)
    return true if s.empty?

    if s.include?("()") || s.include?("[]") || s.include?("{}")
        s.gsub!("()", "")
        s.gsub!("[]", "")
        s.gsub!("{}", "")
        sieve_str(s)
    else
        false
    end
end

