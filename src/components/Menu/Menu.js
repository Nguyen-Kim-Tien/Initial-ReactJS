import React, { useState, useEffect } from "react";
import { Button, MenuItem, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import StyledMenu from "../StyledMenu/StyledMenu";
import {
  AccountCircle,
  ArrowDropDown,
  NotificationsActiveOutlined,
  Person,
  LogoutOutlined,
  ChangeCircleOutlined,
} from "@mui/icons-material";
import "./Menu.scss";
import { useTranslation } from "react-i18next";
import parseJwt from "../../funtions/parseJwt";
import { toast } from "react-toastify";

export default function CustomizedMenus() {
  const navigate = useNavigate();
  const { t } = useTranslation("translation", { keyPrefix: "layouts.Menu" });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (localStorage.getItem("JWT_loginToken")) {
      const JWT_loginToken = localStorage.getItem("JWT_loginToken");
      const { fullName, email } = parseJwt(JWT_loginToken);
      setFullname(fullName);
      setEmail(email);
    } else {
      toast.error("Phiên đăng nhập đã hết hạn");
      navigate("/login");
    }
  }, []);

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("JWT_loginToken");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <div className="menu_component">
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        startIcon={<AccountCircle />}
        endIcon={<ArrowDropDown />}
        size="large"
        className="menu_button"
      >
        {fullname}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          {email}
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />
        {/* <Link
          to="https://help.h5p.com/hc/en-us/articles/7633089307677"
          class="link"
        >
          
          <MenuItem onClick={handleClose} disableRipple>
            <HelpOutline />
            {t("getting_started")}
          </MenuItem>
        </Link> */}
        <Link to="/announcements" className="link">
          <MenuItem onClick={handleClose} disableRipple>
            <NotificationsActiveOutlined />
            {t("announcements")}
          </MenuItem>
        </Link>
        <Link to="/account" className="link">
          <MenuItem onClick={handleClose} disableRipple>
            <Person />
            {t("my_account")}
          </MenuItem>
        </Link>
        <Link to="/change-password" className="link">
          <MenuItem onClick={handleClose} disableRipple>
            <ChangeCircleOutlined />
            {t("change_password")}
          </MenuItem>
        </Link>

        <MenuItem onClick={handleLogout} disableRipple>
          <LogoutOutlined />
          {t("logout")}
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
